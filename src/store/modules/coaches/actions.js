export default {
    registerCoach(context, data) {
        const coachData = {
            id: new Date().toISOString(),
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.rate,
            areas: data.areas
        };
        context.commit('registerCoach', coachData)
    }
};