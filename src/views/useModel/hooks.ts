import type { Ref } from 'vue';
export function useVModel<P extends object, K extends keyof P>(props: P, key: K, emit?: any): Ref<P[K]> {
  return computed({
    get() {
      const res = toRefs(props)[key];
      return res.value;
    },
    set(val) {
      emit?.(`update:${key as string}`, val);
    },
  });
}
