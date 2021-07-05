export default {


    SET_PEOPLE_TO_STATE: (state, people) => {
        state.people = people;
    },

    SET_PERSON: (state, person) => {
        if (state.cart.length) {
            let isPeopleExist = false;
            state.cart.map(function (item) {
                if (item.name === person.name) {
                    isPeopleExist = true;
                    item.quantity++
                }
            })
            if (!isPeopleExist) {
                state.cart.push(person)
            }
        } else {
            state.cart.push(person)
        }

    },

    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT:(state, index) =>{
        state.cart[index].quantity++
    },
    DECREMENT:(state, index) =>{
        if ( state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    },
}