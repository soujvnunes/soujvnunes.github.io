export type Icons = Record<
  "polkamarkets" | "ufal60anos" | "medium",
  Pick<JSX.IntrinsicElements["path"], "className" | "d">[]
>;

const icons: Icons = {
  polkamarkets: [
    {
      d: "M11.96,0L2.04,11.93l9.93,12.07,9.98-12.04L11.96,0Z",
      className: "fill-[#5751FC]",
    },
    {
      d: "M11.97,24L2.04,11.93l12.48-3.02-2.55,15.08Z",
      className: "fill-[#3033BE]",
    },
    {
      d: "M11.96,0l10,11.96-7.44-3.05L11.96,0Z",
      className: "fill-[#51A0FC]",
    },
  ],
  ufal60anos: [
    {
      d: "M11.15,4.51l.08.18c.45,1.07.6,2.22.87,3.34.6,2.46,1.11,4.92,1.95,7.32.59,1.68,1.65,3.53,1.55,5.36-.03.49-.12.93-.25,1.3-.36.08-.73.15-1.11.19-.56.06-1.14.07-1.73.04-.45-.03-1.98-.08-2.32-.41-2.5-1.62-1.44-5.64-1.1-8.1.11-.8.24-1.59.4-2.38.17-.84.39-1.67.59-2.5.28-1.17.4-3.24,1.07-4.31Z",
      className: "fill-[#ff97ff]",
    },
    {
      d: "M15.35,22c-.5,1.37-1.65,1.96-2.97,1.99-1,.04-2.24-.44-3.44-1.07-2-1.06-4.01-2.51-5.64-4.09-.35-.34-1.8-1.79-.67-2.1,1.72-.48,4.85,3.37,3.49.39-1.47-3.23-3.58-6.21-4.85-9.52-.27-.71-1.19-2.72-.48-3.44.48-.49,1.21.53,1.44.84,1.04,1.45,1.67,3.17,2.57,4.71.04.07,1.05,1.75,1.3,1.4.28-.38-.33-1.74-.44-2.12-.58-1.98-1.33-3.92-1.89-5.91-.15-.53-.78-2.38.14-2.61.54-.14.98.79,1.16,1.16.35.71.66,1.43.96,2.16.3.75.56,1.53.95,2.24.09.16.19.33.31.47.04.04.13.15.2.1.09-.07.07-.27.07-.36,0-.3-.06-.6-.13-.89-.3-1.23-.65-2.44-.9-3.67-.07-.34-.36-1.39.04-1.63.56-.34,1.1.93,1.23,1.26.44,1.11.69,2.29,1.03,3.44.16.55.33,1.28.75,1.7.43.43.43-.22.41-.53-.02-.41-.32-2.24.39-2.21.37.01.62.46.77.8-.66,1.07-.78,3.14-1.07,4.31-.09.36.03,1.01-.06,1.37-.06.23-.32.19-.38.42-.06.24-.11.48-.16.71-.16.79-.29,1.58-.4,2.38-.34,2.46-1.4,6.49,1.1,8.1.34.34,1.87.39,2.32.41.58.04,1.16.02,1.73-.04.38-.04.74-.1,1.11-.19Z",
      className: "fill-[#ea2934]",
    },
    {
      d: "M11.15,4.51c.03-.06.07-.11.11-.16.88-1.18,1.29.95,1.3,1.49v.06c0,.5-.11,1.05-.04,1.55,0,.04.02.15.08.14.34-.09.68-.94.83-1.21.6-1.05,1.23-2.09,2.03-3.01.23-.27.9-1.17,1.36-.89.67.42-.14,2.45-.31,3.03-.04.15-.33,1,0,1.02.4.03.88-.87,1.05-1.13.76-1.14,1.42-2.32,2.34-3.35.24-.27.75-.92,1.2-.78.64.2.19,2.02.08,2.42-.51,1.78-1.57,3.35-2.23,5.07-.15.4-.65,1.43-.43,1.85.19.36.98-.75,1.05-.84.67-.85,1.21-1.88,2.06-2.57.3-.24.79-.59,1.18-.33.64.42-.26,2.12-.5,2.58-.86,1.65-1.95,3.16-2.93,4.74-.29.47-1,1.35-.87,1.96.1.51.9.13,1.16,0,.88-.44,1.71-.95,2.72-1.05.37-.04.95-.07,1.08.39.17.61-1.92,1.62-2.34,2-.78.7-1.16,1.66-1.83,2.42-.93,1.06-2.5,1.76-3.96,2.09.14-.37.22-.81.25-1.3.04-.81-.14-1.63-.41-2.43-.34-1.01-1.21.43-1.53-.5-.41-1.18-.35-4.79-.66-5.99-.32-1.24-.6-2.5-.9-3.75-.27-1.12-.42-2.27-.87-3.34l-.08-.18Z",
      className: "fill-[#3f9cf9]",
    },
    {
      d: "M8.61,18.99h3.21c.18,0,.33-.15.33-.33v-4.37c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29h-.94s-.06-.01-.08-.03c-.02-.02-.03-.05-.03-.08s.01-.06.03-.08.05-.03.08-.03h1.77s.09-.02.12-.05c.03-.03.05-.07.05-.12v-1.48c0-.18-.15-.33-.33-.33h-3.21c-.18,0-.33.15-.33.33v7.24c0,.18.15.33.33.33ZM10.1,14.87s.01-.06.03-.08.05-.03.08-.03.06.01.08.03c.02.02.03.05.03.08v2.55s-.01.06-.03.08c-.02.02-.05.03-.08.03s-.06-.01-.08-.03c-.02-.02-.03-.05-.03-.08v-2.55ZM15.94,18.99c.18,0,.33-.15.33-.33v-7.24c0-.18-.15-.33-.33-.33h-3.21c-.18,0-.33.15-.33.33v7.24c0,.18.15.33.33.33h3.21ZM14.22,12.92c0-.06.05-.11.11-.11h0c.06,0,.11.05.11.11v4.49c0,.06-.05.11-.11.11h0c-.06,0-.11-.05-.11-.11v-4.49ZM8.27,9.79v-1.61h.26v1.61c0,.33.15.79.7.79s.7-.46.7-.79v-1.61h.26v1.61c0,.43-.19,1.03-.96,1.03s-.96-.6-.96-1.03ZM10.97,10.78h-.26v-2.59h1.56v.23h-1.3v.91h1.21v.23h-1.21v1.23ZM12.35,10.78l.3-.69h1.37l.29.69h.27l-1.11-2.59h-.27l-1.12,2.59h.27ZM13.34,8.49h0l.58,1.36h-1.17l.59-1.36ZM16.28,10.55v.23h-1.47v-2.59h.26v2.36h1.22ZM9.1,19.3l-.81,2.07h.57l.14-.35h.77l.14.35h.57l-.8-2.07h-.57ZM9.18,20.55l.2-.7h0l.2.7h-.4ZM11.91,19.3h.54v2.07h-.58l-.82-1.29h0v1.29h-.54v-2.07h.58l.82,1.29h0v-1.29ZM13.71,19.27c-.63,0-1.11.45-1.11,1.07s.48,1.07,1.11,1.07,1.11-.45,1.11-1.07-.48-1.07-1.11-1.07ZM13.72,20.92c-.32,0-.57-.25-.57-.58s.21-.58.56-.58c.32,0,.57.25.57.58s-.21.58-.56.58ZM16.27,20.73c0,.47-.35.68-.74.68-.27,0-.55-.11-.72-.29.1-.12.19-.24.29-.36.09.09.28.17.43.17.1,0,.19-.06.19-.19,0-.1-.12-.15-.22-.18-.37-.11-.59-.22-.59-.64,0-.45.38-.64.74-.64.22,0,.46.09.6.23-.1.12-.19.25-.29.37-.08-.07-.21-.12-.31-.12-.09,0-.2.03-.2.15,0,.1.09.13.22.18.26.08.6.25.6.64Z",
      className: "fill-current",
    },
  ],
  medium: [
    {
      d: "M7.67,6.33c-.74,0-1.48.15-2.17.43-.69.28-1.31.7-1.84,1.23-.53.53-.94,1.15-1.23,1.84-.28.69-.43,1.42-.43,2.17s.15,1.48.43,2.17c.28.69.7,1.31,1.23,1.84.53.53,1.15.94,1.84,1.23.69.28,1.42.43,2.17.43s1.48-.15,2.17-.43c.69-.28,1.31-.7,1.84-1.23.53-.53.94-1.15,1.23-1.84.28-.69.43-1.42.43-2.17s-.15-1.48-.43-2.17c-.28-.69-.7-1.31-1.23-1.84-.53-.53-1.15-.94-1.84-1.23-.69-.28-1.42-.43-2.17-.43ZM16.67,7c-.35,0-.7.13-1.02.38-.32.25-.62.62-.87,1.08s-.44,1.02-.58,1.62c-.13.61-.2,1.26-.2,1.91s.07,1.31.2,1.91c.13.61.33,1.16.58,1.62s.54.83.87,1.08c.32.25.67.38,1.02.38s.7-.13,1.02-.38.62-.62.87-1.08.44-1.02.58-1.62c.13-.61.2-1.26.2-1.91s-.07-1.31-.2-1.91-.33-1.16-.58-1.62-.54-.83-.87-1.08c-.32-.25-.67-.38-1.02-.38ZM21,7.67c-.27,0-.52.46-.71,1.27-.19.81-.29,1.91-.29,3.06s.11,2.25.29,3.06c.19.81.44,1.27.71,1.27s.52-.46.71-1.27c.19-.81.29-1.91.29-3.06s-.11-2.25-.29-3.06c-.19-.81-.44-1.27-.71-1.27Z",
    },
  ],
};

export default icons;