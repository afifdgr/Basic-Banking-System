export class BankAccount {
  constructor() {
    this.saldo = 0;
    this.saldoDisplay = document.getElementById("saldoDisplay");
    this.updateSaldoDisplay();
  }

  updateSaldoDisplay() {
    this.saldoDisplay.textContent = this.saldo;
  }

  deposit() {
    const deposit = parseFloat(
      prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
    );
    if (!isNaN(deposit)) {
      this.saldo += deposit;
      this.updateSaldoDisplay();
      alert(`Saldo berhasil ditambahkan. Saldo Anda Saat Ini : ${this.saldo}`);
    } else {
      alert("Masukan tidak valid.");
    }
  }

  withdraw() {
    const withdraw = parseFloat(
      prompt(
        `Saldo Anda Saat Ini : ${this.saldo}. Masukkan jumlah saldo yang ingin dikurangi : `
      )
    );
    if (!isNaN(withdraw)) {
      if (withdraw > this.saldo) {
        alert("Saldo tidak mencukupi.");
      } else {
        setTimeout(() => {
          this.saldo -= withdraw;
          this.updateSaldoDisplay();
          alert(
            `Saldo berhasil dikurangi. Saldo Anda Saat Ini : ${this.saldo}`
          );
        }, 1000);
      }
    } else {
      alert("Masukan tidak valid.");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const bank_account = new BankAccount();

  document.getElementById("deposit").addEventListener("click", () => {
    bank_account.deposit();
  });

  document.getElementById("withdraw").addEventListener("click", () => {
    bank_account.withdraw();
  });
});
