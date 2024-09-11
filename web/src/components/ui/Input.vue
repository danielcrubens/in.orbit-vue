<template>
  <input
    :class="inputClasses"
    v-bind="$attrs"
    :ref="inputRef"
    :value="modelValue"
    @input="onInput"
    :disabled="disabled"
    :placeholder="placeholder"
    :type="type"
    v-focus
  />
</template>

<script setup lang="ts">
import { computed, ref, useAttrs, onMounted } from 'vue'

interface Props {
  modelValue?: string | number
  disabled?: boolean
  placeholder?: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
  placeholder: '',
  type: 'text'
})

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
const attrs = useAttrs()
const inputRef = ref<HTMLInputElement | null>(null)

const inputClasses = computed(() => {
  const defaultClasses = 'px-4 h-12 bg-black border border-zinc-900 rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-pink-500 focus-visible:ring-4 ring-pink-500/10'
  const customClasses = attrs.class as string || ''
  return `${defaultClasses} ${customClasses}`.trim()
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus()
  }
})

defineExpose({ inputRef })
</script>