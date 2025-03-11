export interface ToastType {
  id: string;
  message: string;
  type: 'success' | 'failure' | 'warning';
}

export interface ToastContextType {
  showToast: (message: string, type: ToastType['type']) => void;
}
