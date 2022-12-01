export default {
    registerCoach(state, payload) {
        console.log(state.coaches)
        state.coaches.push(payload)
    }
};