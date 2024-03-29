const sleep = async (duration: number) => new Promise<void>(resolve => setTimeout(() => resolve(), duration));
export default sleep;
