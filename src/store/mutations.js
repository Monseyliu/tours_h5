export default {
    changeCity: (state, city) => {
        if (city) {
            state.city = city;
            try {
                localStorage.city = city
            } catch (e) { }
        } else {
            state.city = ""
        }
    }
}