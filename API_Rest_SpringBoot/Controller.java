public class Controller {

    @CrossOrigin(origins = "*")
    @RestController
    public class AlumnoController{
        @GetMapping("/alumnos")
        public List<Alumno> getAlumnos(){
            List<Alumno> alumnos = new ArrayList<>();
            alumnos.add(new Alumno("Juan", "Perez", 20));
            alumnos.add(new Alumno("Maria", "Gomez", 22));
            return alumnos;
        }2
    }
}