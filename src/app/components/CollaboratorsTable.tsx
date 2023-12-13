import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditIcon from "../../../public/static/edit-icon.png";
import DeleteIcon from "../../../public/static/delete-icon.png";

import "../../styles/components/collaboratorsTableStyle.css";

import ModalCollaborator from "../components/ModalCollaborator";
import ModalDelete from "../components/ModalDelete";
import { performApi } from "../utils/api";

interface Collaborator {
  id: number | undefined;
  name: string;
  email: string;
  userType: string;
  password: string | null
}

interface CollaboratorsTableProps {
  collaborators: Collaborator[];
}

export default function CollaboratorsTable({email, id, name, userType}: Collaborator) {
  const [users, setUsers] = useState<Collaborator[]>([])
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [action, setAction] = useState<string | null>("");

  const handleClick = (collaborator: Collaborator, action: string) => {
    setSelectedCollaborator(collaborator);
    setAction(action);
  };

  const handleModalClose = () => {
    setSelectedCollaborator(null);
    setAction("");
  };


  const getUsers = async () => {
    try {
      const getAuthMe = await performApi.getDataWithouToken('users');

      const filteredUsers = getAuthMe.filter((item: Collaborator) => {
        return item.userType === "ADMIN" || item.userType === "COLLABORATOR";
      });
      console.log("" + filteredUsers);

      setUsers(filteredUsers);
      console.log(users);


    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table__title">Nome</TableCell>
            <TableCell className="table__title">Email</TableCell>
            <TableCell className="table__title">Tipo</TableCell>
            <TableCell className="table__title">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="table__item table__item-name">
                {item.name}
              </TableCell>
              <TableCell className="table__item">{item.email}</TableCell>
              <TableCell className="table__item">
                {item.userType === "ADMIN" ? "Administrador" : "Colaborador"}
              </TableCell>
              <TableCell className="table__item">
                <div className="table__item-actions">
                  <img
                    src={EditIcon.src}
                    alt="Edit Icon"
                    className="item__icon"
                    onClick={() => handleClick(item, "edit")}
                  />
                  <img
                    src={DeleteIcon.src}
                    alt="Delete Icon"
                    className="item__icon"
                    onClick={() => handleClick(item, "delete")}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedCollaborator && action == "edit" && (
        <ModalCollaborator
          openModal={true}
          title="Editar"
          name={selectedCollaborator.name}
          email={selectedCollaborator.email}
          userType={selectedCollaborator.userType}
          onClose={handleModalClose}
        />
      )}
      {selectedCollaborator && action == "delete" && (
        <ModalDelete
          openModal={true}
          type="collaborator"
          onClose={handleModalClose}
          confirm={() => {
            console.log(selectedCollaborator.id);
          }}
        ></ModalDelete>
      )}
    </TableContainer>
  );
}
