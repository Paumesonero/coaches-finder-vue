export default {
    coaches(state) {
        return state.coachesData
    },
    hasCoaches(state) {
        return state.coachesData && state.coachesData.length > 0
    }
};