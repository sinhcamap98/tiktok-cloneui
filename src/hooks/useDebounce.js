function useDebounce(value, delay) {
    let timeout = setTimeout(() => {
        return value;
    }, delay);
    clearTimeout(timeout);
}
export default useDebounce;
