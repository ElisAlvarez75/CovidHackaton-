export const getSpainData = () => {
    return fetch('http://localhost:3001/ESP').then((res) => {
        return res.json();
    })
}
