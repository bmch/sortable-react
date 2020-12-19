import React from "react";

function TableBody({ collection }) {
  return (
    <tbody>
      {collection.map(person => (
        <tr key={person.id}>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
          <td className="text-right">{person.age}</td>
          <td>{person.position}</td>
          <td>{person.hiredAt}</td>
          <td className="text-right">
            {parseFloat(person.salary).toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
