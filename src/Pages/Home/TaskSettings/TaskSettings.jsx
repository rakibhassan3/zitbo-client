import { BsThreeDots } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styles from "./TaskSettings.module.css";
import React from "react";
import Popup from "../../Shared/Popup/Popup";
import Button from "../../Shared/Button/Button";
import DeleteTaskModal from "../DeleteTaskModal/DeleteTaskModal";
import EditTaskModal from "../EditTaskModal/EditTaskModal";

const TaskSettings = ({ task, activeTaskId, currentLevel, completedTimeInMilliseconds, isTaskActive }) => {

    // defines whether to show the popup
    const [isPopupActive, setIsPopupActive] = React.useState(false);

    // defines whether to show the delete task modal
    const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = React.useState(false);

    // defines whether to show the edit task modal
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = React.useState(false);


    // toggle isDeleteTaskModalOpen state to true or false
    const toggleIsDeleteTaskModalOpen = () => {
        setIsDeleteTaskModalOpen(prevIsDeleteTaskModalOpen => !prevIsDeleteTaskModalOpen);
    }

    // toggle isEditTaskModalOpen state to true or false
    const toggleIsEditTaskModalOpen = () => {
        setIsEditTaskModalOpen(prevIsEditTaskModalOpen => !prevIsEditTaskModalOpen);
    }

    return (
        <>
            <div
                className={styles.taskSettings}
                onClick={() => setIsPopupActive(prevIsPopupActive => !prevIsPopupActive)}
            >
                <BsThreeDots />
                {isPopupActive && (
                    // popup
                    <Popup position="forTaskSettings">
                        {/* popup content */}
                        <ul className={styles.settingsList}>
                            <li>
                                <Button
                                    handleClick={toggleIsEditTaskModalOpen}
                                    className="btnMedium btnFlex"
                                >
                                    <AiOutlineEdit />
                                    Edit
                                </Button>
                            </li>
                            <li>
                                <Button
                                    handleClick={toggleIsDeleteTaskModalOpen}
                                    className="btnMedium btnFlex"
                                >
                                    <AiOutlineDelete />
                                    Delete
                                </Button>
                            </li>
                        </ul>
                    </Popup>
                )}
            </div>
            {/* modals to open when edit or delete button clicked */}
            {/* kept modals outside the .taskSettings because there is a click event listener */}
            {isDeleteTaskModalOpen && <DeleteTaskModal
                task={task}
                activeTaskId={activeTaskId}
                currentLevel={currentLevel}
                completedTimeInMilliseconds={completedTimeInMilliseconds}
                isTaskActive={isTaskActive}
                closeDeleteTaskModal={toggleIsDeleteTaskModalOpen}
            />}
            {isEditTaskModalOpen && <EditTaskModal
                task={task}
                closeEditTaskModal={toggleIsEditTaskModalOpen}
            />}
        </>
    )
};

export default TaskSettings
