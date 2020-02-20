export default class formatter {

    static numberToPound = (valueToFormat: number) => {
        return '£' + valueToFormat.toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

}