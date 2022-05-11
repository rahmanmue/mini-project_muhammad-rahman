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

const subscribeDataTransaksi = gql`
  subscription MySubscription {
    test_Transaksi {
      id
      kodeNota
      tanggal
      total
      bayar
      kembali
    }
  }
`;

// For Dashboard

const subscribeJumlahStok = gql`
  subscription stok {
    test_Produk_aggregate {
      aggregate {
        sum {
          stok
        }
      }
    }
  }
`;

const subscribePengeluaran = gql`
  subscription pengeluaran {
    test_Produk_aggregate {
      aggregate {
        sum {
          harga
        }
      }
    }
  }
`;

const subscribePemasukan = gql`
  subscription MySubscription3 {
    test_Transaksi_aggregate {
      aggregate {
        sum {
          total
        }
      }
    }
  }
`;

const subsribeJumlahProduk = gql`
  subscription MySubscription4 {
    test_Produk_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

const subscribeJumlahTransaksi = gql`
  subscription MySubscription5 {
    test_Transaksi_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export {
  subscribeDataProduk,
  subscribeDataTransaksi,
  subscribeJumlahStok,
  subscribePemasukan,
  subscribePengeluaran,
  subsribeJumlahProduk,
  subscribeJumlahTransaksi,
};
