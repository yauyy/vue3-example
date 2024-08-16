import type { Ref } from 'vue';
export function useVModel<P extends object, K extends keyof P>(props: P, key: K, emit?: any): Ref<P[K]> {
  return computed({
    get() {
      // const res = toRefs(props)[key];
      // console.log('🚀 ~ get ~ res:', res);
      return props[key];
    },
    set(val) {
      console.log(val, 'val');

      emit?.(`update:${key as string}`, val);
    },
  });
}
