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

const getDataProdukById = gql`
  query MyQuery($id: Int!) {
    test_Produk_by_pk(id: $id) {
      id
      harga
      gambar
      namaProduk
      stok
    }
  }
`;
// const getDataProdukById = gql`
//   query MyQuery2($_eq: Int!) {
//     test_Produk(where: { id: { _eq: $_eq } }) {
//       gambar
//       harga
//       id
//       namaProduk
//       stok
//     }
//   }
// `;

// const getDataNota = gql``;

// const getDataTransaksi = gql``;

export {
  getDataProduk,
  getDataProdukById,
  //  getDataNota,
  //  getDataTransaksi
};
