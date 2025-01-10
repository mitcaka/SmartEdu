export function formatCurrency(amount: number): string {
    // Kiểm tra nếu amount không phải là số
    if (isNaN(amount)) {
      throw new Error("Giá trị đầu vào phải là một số.");
    }
  
    // Chuyển đổi số thành chuỗi định dạng tiền tệ
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₫";
}