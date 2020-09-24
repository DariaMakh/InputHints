$("#address").suggestions({
    token: "ad9c78e2f50b1296f0ad144199645e81e47e28af",
    type: "ADDRESS",
    hint: "Выберете адрес",
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});