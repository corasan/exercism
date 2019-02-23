const NUCLEOTIDES = {'A': 'U', 'C': 'G', 'G': 'C', 'T': 'A'};

export default class Transcriptor {
  toRna(dna) {
    validateDna(dna);

    return dna.split('').map((nucleotide) => NUCLEOTIDES[nucleotide]).join('');
  }
}

const validateDna = (dna) => {
  if(/[^ACGT]/.test(dna)) throw new Error('Invalid input DNA.');
}