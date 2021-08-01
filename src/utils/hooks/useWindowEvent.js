import { onMounted, onUnmounted } from "vue";

export default function useWindowEvent(event, eventHandlerFunc) {
  onMounted(() => {
    window.addEventListener(event, eventHandlerFunc);
  });

  onUnmounted(() => {
    window.removeEventListener(event, eventHandlerFunc);
  });
}
