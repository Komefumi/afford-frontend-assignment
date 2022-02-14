export function createPayloadCarrier<T>() {
  return (t: T) => ({ payload: t });
}
