import { ref } from 'vue';

const activeCardId = ref(null);

export function useCardState() {
    return {
        activeCardId,
        setActiveCard: (id) => {
            activeCardId.value = id;
        },
        clearActiveCard: () => {
            activeCardId.value = null;
        },
        isCardActive: (id) => {
            return activeCardId.value === id;
        }
    };
}
