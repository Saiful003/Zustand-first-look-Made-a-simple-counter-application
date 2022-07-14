import create from "zustand";

export const useStore = create((set) => {
  return {
    count: 1,
    increament: (increamentBy = 1) => {
      return set((state) => {
        return {
          count: state.count + increamentBy
        };
      });
    },
    decreament: (decreamentBy = 1) => {
      return set((state) => {
        if (state.count > 0) {
          return {
            count: state.count - decreamentBy
          };
        }
      });
    },
    reset: () => {
      return set(() => {
        return {
          count: 0
        };
      });
    }
  };
});
