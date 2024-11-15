let isSpanish = true;

function toggleLanguage() {
  const title = document.getElementById("title");
  const paragraph1 = document.getElementById("paragraph1");
  const paragraph2 = document.getElementById("paragraph2");

  if (isSpanish) {
    title.innerHTML = "INTERNATIONAL EXAMS <br /> CAMBRIDGE";
    paragraph1.innerHTML =
      "Applying Cambridge YLE (Young Learners of English), A2, B1, and B2 assessments to students of the \"Tte Crl Alfredo Bonifaz Fonseca\" educational institution is essential to boost their development in learning English and ensure alignment with international standards. These tests offer a progressive structure, allowing for objective evaluation and certification of language skills according to each level, from the youngest in primary school to secondary school students. The Cambridge certification is recognized worldwide and adds significant value to the students' academic profile, as it provides communication skills that prepare them for globalized educational and work contexts. Additionally, the preparation and evaluation process promotes motivation, commitment, and confidence in students' language learning. This approach enhances the educational quality of the institution, generating a positive impact as having a Cambridge certificate can open doors both academically and professionally, facilitating access to universities and job opportunities in environments where English is a requirement.";
    paragraph2.innerHTML =
      "The Cambridge international assessment measures the level of English language proficiency according to international standards. The assessment considers the levels established by the Common European Framework of Reference for Languages (CEFR), from pre-A1 to C2. Our students participate in this assessment as they access one of the most impactful and prestigious language certificates worldwide, accrediting an adequate level of English.";
  } else {
    title.innerHTML = "EXÁMENES INTERNACIONALES <br /> CAMBRIDGE";
    paragraph1.innerHTML =
      "Aplicar las evaluaciones de Cambridge YLE (Young Learners of English), A2, B1 y B2 a los estudiantes de la institución educativa “Tte Crl Alfredo Bonifaz Fonseca” es fundamental para impulsar su desarrollo en el aprendizaje del inglés y asegurar la alineación con estándares internacionales. Estas pruebas ofrecen una estructura progresiva, que permite evaluar y certificar de manera objetiva las competencias lingüísticas en función de cada nivel, desde los más pequeños en el nivel primaria hasta estudiantes de secundaria. La certificación de Cambridge, es reconocida mundialmente y aporta un valor significativo al perfil académico de los estudiantes, ya que les brinda habilidades de comunicativas que los preparan para contextos educativos y laborales globalizados. Además, el proceso de preparación y evaluación promueve la motivación, el compromiso y la confianza de los estudiantes en su aprendizaje del idioma. Este enfoque impulsa la calidad educativa de la institución, generando un impacto positivo ya que contar con un certificado de Cambridge puede abrir puertas tanto en el ámbito académico como profesional, facilitando el acceso a universidades y oportunidades laborales en entornos donde el inglés es un requisito.";
    paragraph2.innerHTML =
      "La evaluación internacional Cambridge mide según estándares internacionales el nivel de dominio del idioma inglés. La evaluación considera los niveles establecidos por el marco común europeo de referencia para las lenguas (MCER), desde pre-A1 hasta C2. En esta evaluación participan nuestros estudiantes ya que acceden a uno de los certificados de idiomas que acreditan un nivel adecuado de inglés con más repercusión y prestigio a nivel mundial.";
  }

  isSpanish = !isSpanish;
}
