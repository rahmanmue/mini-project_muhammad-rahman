import { gql } from "@apollo/client";

const subscribeDataProduk = gql`
  subscription MySubscription {
    test_Produk {
      id
      namaProduk
      harga
      stok
      gambar
    }
  }
`;
// export const subscribeDataNota = gql``;
// export const subscribeDataTransaksi = gql``;

export { subscribeDataProduk };
