export interface Level {
  name: string,
  code: number
}
export const DEFAULT_LEVEL: Level = {
  name: "Nivel 1",
  code: 1
}
export const DEFAULT_LEVELS: Level[] =  [
  {name: 'Nivel 1', code: 1},
  {name: 'Nivel 2', code: 2},
  {name: 'Nivel 3', code: 3}
];
