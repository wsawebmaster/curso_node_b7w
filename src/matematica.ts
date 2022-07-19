export let versao: string = '1.0';

export function somar(x: number, y: number): number{
    return x + y;
}
export function subtrair(x: number, y: number): number{
    return x - y;
}
export function multiplicar(x: number, y: number): number{
    return x * y;
}

export default{
    somar,
    subtrair,
    multiplicar,
    versao
};