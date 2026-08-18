fetch("https://raw.githubusercontent.com/vimnm2259-hue/first_api/refs/heads/main/main.json")

    .then(response => {
        if (!response.ok) {
            throw new Error("Ошыбка сервера")
        };
        return response.json()
    })
    .then(data => {
        console.log("вот данные: ", data);
    })
    .catch(error => {
        console.error(error);
    })
