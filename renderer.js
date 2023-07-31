export class Renderer {
        
    renderTable(studentArray) {
        let s = []
        studentArray.forEach(element => {
            s += '<tr>'

            s += '<td>'
            s += '<img src='+ element.image +'>'
            s += '</td>'

            s += '<td>'
            s += element.name
            s += '</td>'

            s += '<td>'
            s += this.isActive(element.isActive)
            s += '</td>'

            s += '<td>'
            s += element.birthYear
            s += '</td>'

            s += '<td>'
            s += element.connections
            s += '</td>'

            s += '<td>'
            s += element.completedCredits
            s += '</td>'

            s += '<td>'
            s += element.activeSemesterCount
            s += '</td>'

            s += '<td>'
            s += element.id
            s += '</td>'

            s += '<td>'
            s += '<button data-stud-id="'+element.id+'" type="button" class="btn btn-outline-danger delete-student-btn">X</button>'
            s += '</td>'

            s += '</tr>'
        })
        return s
    }

    isActive(status) {
        return status
        ?
        '<span class="badge rounded-pill bg-success">T</span>'
        :
        '<span class="badge rounded-pill bg-danger">F</span>'
    }
}