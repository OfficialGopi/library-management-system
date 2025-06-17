import { Loader2 } from "lucide-react";
function TableView({ data, columns, onDelete, loading }) {
  return (
    <>
      <table className="border w-full">
        {!loading && (
          <>
            <thead>
              <tr>
                {columns.map((c) => (
                  <th className="border p-2 rounded-sm" key={c}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id || row.card_number}>
                  {columns.map((col) => (
                    <td className="border p-2 rounded-sm" key={col}>
                      {row[col]}
                    </td>
                  ))}
                  {onDelete && (
                    <td>
                      <button
                        onClick={() => onDelete(row.id || row.card_number)}
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </>
        )}
      </table>
      {loading && <Loader2 className="w-10 h-10 mx-auto animate-spin" />}
    </>
  );
}

export default TableView;
