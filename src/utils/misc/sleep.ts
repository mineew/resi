function sleep(ms: number) {
  return new Promise<null>((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
}

export default sleep;
