export interface UseVModelOptions<T, Passive extends boolean = false> {
  /**
   * When passive is set to `true`, it will use `watch` to sync with props and ref.
   * Instead of relying on the `v-model` or `.sync` to work.
   *
   * @default false
   */
  passive?: Passive;
  /**
   * When eventName is set, it's value will be used to overwrite the emit event name.
   *
   * @default undefined
   */
  eventName?: string;
  /**
   * Attempting to check for changes of properties in a deeply nested object or array.
   * Apply only when `passive` option is set to `true`
   *
   * @default false
   */
  deep?: boolean;
  /**
   * Defining default value for return ref when no value is passed.
   *
   * @default undefined
   */
  defaultValue?: T;
  /**
   * Clone the props.
   * Accepts a custom clone function.
   * When setting to `true`, it will use `JSON.parse(JSON.stringify(value))` to clone.
   *
   * @default false
   */
  clone?: boolean | CloneFn<T>;
  /**
   * The hook before triggering the emit event can be used for form validation.
   * if false is returned, the emit event will not be triggered.
   *
   * @default undefined
   */
  shouldEmit?: (v: T) => boolean;
}

/**
 * Shorthand for v-model binding, props + emit -> ref
 *
 * @see https://vueuse.org/useVModel
 * @param props
 * @param key (default 'value' in Vue 2 and 'modelValue' in Vue 3)
 * @param emit
 */
export function useVModel<P extends object, K extends keyof P, Name extends string, Passive extends boolean>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options: UseVModelOptions<P[K], Passive> = {},
) {
  const { clone = false, passive = false, eventName, deep = false, defaultValue, shouldEmit } = options;

  const vm = getCurrentInstance();
  // @ts-expect-error mis-alignment with @vue/composition-api
  const _emit = emit || vm?.emit || vm?.$emit?.bind(vm) || vm?.proxy?.$emit?.bind(vm?.proxy);
  let event: string | undefined = eventName;

  if (!key) {
    key = 'modelValue' as K;
  }

  event = event || `update:${key!.toString()}`;

  const cloneFn = (val: P[K]) => (!clone ? val : typeof clone === 'function' ? clone(val) : cloneFnJSON(val));

  const getValue = () => {
    if (isDef(props[key!])) {
      console.log('getValue222222', props[key!]);
      const c = cloneFn(props[key!]);
      console.log(c, 'ccc');

      return c;
    }
    return defaultValue;
  };

  const triggerEmit = (value: P[K]) => {
    if (shouldEmit) {
      if (shouldEmit(value)) _emit(event, value);
    } else {
      _emit(event, value);
    }
  };

  if (passive) {
    const initialValue = getValue();
    const proxy = ref<P[K]>(initialValue!);
    let isUpdating = false;

    watch(
      () => props[key!],
      (v) => {
        console.log('watch', v);

        if (!isUpdating) {
          isUpdating = true;
          (proxy as any).value = cloneFn(v) as any;
          nextTick(() => (isUpdating = false));
        }
      },
    );

    watch(
      proxy,
      (v) => {
        console.log('watch222222222', v);

        if (!isUpdating && (v !== props[key!] || deep)) triggerEmit(v as P[K]);
      },
      { deep },
    );

    return proxy;
  } else {
    return computed<P[K]>({
      get() {
        console.log('get...........', getValue());

        return getValue()!;
      },
      set(value) {
        console.log('set...........', value);

        triggerEmit(value);
      },
    });
  }
}
export type CloneFn<F, T = F> = (x: F) => T;
function isDef(v: any): boolean {
  return v !== undefined && v !== null;
}
function cloneFnJSON(v: any) {
  return JSON.parse(JSON.stringify(v));
}
