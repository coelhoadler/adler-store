export const formatToARS = (value) => {
    try {
      return value.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    });
    } catch {
      return '$ 0,00'
    }
  }