import { gql } from "@apollo/client";

export const getDataProduk = gql`
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

export const getDataNota = gql``;

export const getDataTransaksi = gql``;
