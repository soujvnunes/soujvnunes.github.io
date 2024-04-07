const isAppleWidget =
  !!window.navigator.userAgent.match(/iPad/i) ||
  !!window.navigator.userAgent.match(/iPhone/i);

export default isAppleWidget;
