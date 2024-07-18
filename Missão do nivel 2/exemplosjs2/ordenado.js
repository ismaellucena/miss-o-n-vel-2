// Função swap
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Função shuffle
const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
        let idx1 = Math.floor(Math.random() * arr.length);
        let idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

// Função bubble_sort
const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

// Função selection_sort
const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
};

// Função particionamento (para quick_sort)
const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// Função quick_sort
const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    return arr;
};
