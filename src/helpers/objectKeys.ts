export default function objectKeys<O extends object>(params: O) {
  return Object.keys(params) as (keyof O)[];
}
