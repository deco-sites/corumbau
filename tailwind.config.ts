import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      spacing: {
        "35px": "35px",
        "3px": "3px",
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      backgroundImage: {
        'base-gradient': 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0))',
        'inverted-gradient': 'linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
        'inverted-gradient-wider': 'linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))'
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
       boxShadow: {
        'base': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }
    },
  },
};
