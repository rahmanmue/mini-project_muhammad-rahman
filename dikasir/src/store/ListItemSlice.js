import { createSlice } from "@reduxjs/toolkit";

export const ListItemSlice = createSlice({
  // name tidak berpengaruh untuk memanggil state
  name: "List",
  // State
  // listItem = {
  //   id, nama, harga, stok, quantity
  // }
  // listPembayaran = {
  //   total, bayar, kembali
  // }
  initialState: {
    listItem: [],
    listPayment: [],
  },
  reducers: {
    addListItem: (state, action) => {
      const add = (value) => {
        state.listItem = [...state.listItem, value];
      };

      const update = (index) => {
        state.listItem[index].quantity =
          state.listItem[index].quantity + action.payload.quantity;
      };

      const checkState = (prevState) => {
        if (prevState.length > 0) {
          // filter semua state daj cek apakah yang diinputkan sudah ada di state
          prevState.forEach((item, index) => {
            if (item.id === action.payload.id) {
              newIndex = [index];
            }
          });

          if (newIndex.length > 0) {
            update(newIndex);
          } else {
            add(action.payload);
          }
        } else {
          add(action.payload);
        }
      };

      // ambil state sebelumnya
      const stateListItem = [...state.listItem];
      // index untuk params update
      let newIndex = [];

      checkState(stateListItem);

      // jika state lebih dari 0
      // if (prevState.length > 0) {
      //   // filter semua state
      //   prevState.forEach((item, index) => {
      //     // cek apakah yang diinputkan suaah ada di state
      //     if (item.id === action.payload.id) {
      //       // isi newIndex dengan indexnya
      //       newIndex = [index];
      //     }
      //   });

      //   if (newIndex.length > 0) {
      //     // console.log(newIndex);
      //     update(newIndex);
      //   } else {
      //     add(action.payload);
      //   }
      // } else {
      //   add(action.payload);
      // }
    },
    deleteListItem: (state, action) => {
      state.listItem = state.listItem.filter((item) => {
        return item.id !== action.payload;
      });
    },
    deleteAllListItem: (state) => {
      state.listItem = [];
      state.listPayment = [];
    },
    increment: (state, action) => {
      if (
        state.listItem[action.payload].quantity >=
        state.listItem[action.payload].stok
      ) {
        state.listItem[action.payload].quantity =
          state.listItem[action.payload].quantity;
      } else {
        state.listItem[action.payload].quantity =
          state.listItem[action.payload].quantity + 1;
      }
    },
    decrement: (state, action) => {
      if (state.listItem[action.payload].quantity <= 1) {
        state.listItem[action.payload].quantity = 1;
      } else {
        state.listItem[action.payload].quantity =
          state.listItem[action.payload].quantity - 1;
      }
    },
    newPayment: (state, action) => {
      state.listPayment = [action.payload];
      // state.listPayment =
      //   {
      //     total: 1,
      //     bayar: 1,
      //     kembali: 1,
      //     kode_nota: "uuidbaru",
      //   },
    },
  },
});

export const {
  addListItem,
  deleteListItem,
  deleteAllListItem,
  increment,
  decrement,
  newPayment,
} = ListItemSlice.actions;
export default ListItemSlice.reducer;
