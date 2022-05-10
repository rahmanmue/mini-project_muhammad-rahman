import { gql } from "@apollo/client";

const insertDataNota = gql`
  mutation MyMutation($objects: [test_Nota_insert_input!] = {}) {
    insert_test_Nota(objects: $objects) {
      affected_rows
      returning {
        id
        id_produk
        kodeNota
        namaProduk
        quantity
        harga
      }
    }
  }
`;

const insertDataTransaksi = gql`
  mutation MyMutation($object: test_Transaksi_insert_input = {}) {
    insert_test_Transaksi_one(object: $object) {
      id
      total
      bayar
      kembali
      kodeNota
      tanggal
    }
  }
`;

const upsertDataProduk = gql`
  mutation MyMutation(
    $objects: [test_Produk_insert_input!] = {}
    $constraint: test_Produk_constraint = Product_pkey
  ) {
    insert_test_Produk(
      objects: $objects
      on_conflict: { constraint: $constraint, update_columns: stok }
    ) {
      affected_rows
    }
  }
`;

const insertDataProduk = gql`
  mutation MyMutation($object: test_Produk_insert_input = {}) {
    insert_test_Produk_one(object: $object) {
      id
      namaProduk
      harga
      stok
      gambar
    }
  }
`;

const deleteDataProduk = gql`
  mutation MyMutation($_eq: Int!) {
    delete_test_Produk(where: { id: { _eq: $_eq } }) {
      affected_rows
    }
  }
`;

const updateDataProduk = gql`
  mutation MyMutation($id: Int!, $_set: test_Produk_set_input = {}) {
    update_test_Produk_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      namaProduk
      stok
      harga
      gambar
    }
  }
`;

export {
  insertDataNota,
  insertDataTransaksi,
  upsertDataProduk,
  insertDataProduk,
  deleteDataProduk,
  updateDataProduk,
};
