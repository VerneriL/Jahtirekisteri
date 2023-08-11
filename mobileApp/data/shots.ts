export interface shotData {
    id: number,
    kaataja: string,
    paikka: string,
    pvm: string,
    paino: number,
    eläin: string,
    sukupuoli: string,
    ikaluokka: string,
}
export const shots: shotData[] = [
    {
        id: 1,
        kaataja: "Matti Meikäläinen",
        paikka: "Kuusamo",
        pvm: "2021-09-01",
        paino: 120,
        eläin: "Hirvi",
        sukupuoli: "Uros",
        ikaluokka: "Aikuinen",
    },
    {
        id: 2,
        kaataja: "Essi Esimerkki",
        paikka: "Kuusamo",
        pvm: "2021-09-02",
        paino: 150,
        eläin: "Hirvi",
        sukupuoli: "Uros",
        ikaluokka: "Aikuinen",
    },
    {
        id: 3,
        kaataja: "Esko Aho",
        paikka: "Kuusamo",
        pvm: "2021-09-03",
        paino: 100,
        eläin: "Hirvi",
        sukupuoli: "Naaras",
        ikaluokka: "Aikuinen",
    },
    {
        id: 4,
        kaataja: "Kaija Koo",
        paikka: "Espoo",
        pvm: "2021-09-04",
        paino: 80,
        eläin: "Hirvi",
        sukupuoli: "Ei määrritelty",
        ikaluokka: "Vasa",
    },
]