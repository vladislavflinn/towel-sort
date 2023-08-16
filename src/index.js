module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    const sortedMatrix = [];

    matrix.forEach((element, index) => {
        if (index % 2 === 0) {
            for (let i = 0; i < element.length; i++) {
                sortedMatrix.push(element[i]);
            }
        }
        if (index % 2 !== 0) {
            for (let i = element.length - 1; i >= 0; i--) {
                sortedMatrix.push(element[i]);
            }
        }
    });
    return sortedMatrix;
};
