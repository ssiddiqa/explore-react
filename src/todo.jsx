export default function Todo({ task, isDone }) {
    return (
        <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
    )
}

// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone || ': Work on'}</li>
//     )
// }
// export default function Todo({ task, isDone }) {
//     let list;
//     if (isDone)
//         list = <li>Finish : {task}</li>
//     else
//         list = <li>Work On: {task}</li>
//     return list;
// }