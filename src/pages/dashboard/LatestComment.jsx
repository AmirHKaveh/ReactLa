import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(image, name, date, comment) {
  return { image, name, date, comment };
}
const rows = [
  createData(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&usqp=CAU",
    "Amir Kaveh",
    "2023-08-12",
    "This is a test comment"
  ),
  createData(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&usqp=CAU",
    "Ali Rezaei",
    "2023-18-12",
    "This is a test comment"
  ),
  createData(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&usqp=CAU",
    "Iman Ahmadi",
    "2023-11-12",
    "This is a test comment"
  ),
];

export default function LatestComments() {
  return (
    <div className="card mt-5">
      <div className="card-header">
        <h4>Latest Comments</h4>
      </div>

      <div className="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-lg">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr>
                  <td class="col-3">
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-md">
                        <img src={row.image} width={60} height={60}/>
                      </div>
                      <p class="font-bold ms-3 mb-0">{row.name}</p>
                    </div>
                  </td>
                  <td class="col-auto">
                    <p class=" mb-0">{row.date}</p>
                  </td>
                  <td class="col-auto">
                    <p class=" mb-0">{row.comment}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
