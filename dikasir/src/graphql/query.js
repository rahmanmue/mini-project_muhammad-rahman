import { gql } from "@apollo/client";

const getDataProduk = gql`
  query MyQuery {
    test_Produk {
      id
      namaProduk
      stok
      harga
      gambar
    }
  }
`;

const getDataNota = gql``;

const getDataTransaksi = gql``;

export { getDataProduk, getDataNota, getDataTransaksi };
