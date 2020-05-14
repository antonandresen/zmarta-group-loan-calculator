export const calculateMonthlyCost = (loanAmount, repaymentYears, interest) => {
  const months = repaymentYears * 12;

  return Math.round(
    (loanAmount * (interest / 100)) /
      12 /
      (1 - Math.pow(1 + interest / 100 / 12, months * -1))
  );
};

export const defaultFormValues = {
  loanAmount: 250000,
  repaymentYears: 14,
  interest: 5.77,
};
