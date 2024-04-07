export default function getSupportsMov() {
  const appleWebKitVersion =
    window.navigator.userAgent.match(/AppleWebKit\/\d+/gi)?.[0];
  const version = Number(appleWebKitVersion?.match(/\d+/)?.[0]);

  return !Number.isNaN(version) && version >= 605;
}
