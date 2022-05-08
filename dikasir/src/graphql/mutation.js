import { gql } from "@apollo/client";

const insertDataNota = gql`
  mutation MyMutation($objects: [test_Nota_insert_input!] = {}) {
    insert_test_Nota(objects: $objects) {
      affected_rows
      returning {
        id
        id_produk
        kodeNota
        nama
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

export { insertDataNota, insertDataTransaksi, upsertDataProduk };
