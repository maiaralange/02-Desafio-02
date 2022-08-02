import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FoodInfo } from '../Food';
import Input from '../Input';
import { Modal, ModalProps } from '../Modal';
import { Form } from './styles';

interface ModalEditFoodProps extends ModalProps {
  handleUpdateFood: (food: FoodInfo) => void;
  isOpen: boolean;
  editingFood: FoodInfo;
}

export function ModalEditFood({
  setIsOpen,
  isOpen,
  editingFood,
  handleUpdateFood
}: ModalEditFoodProps) {
  const formRef = createRef<HTMLFormElement>();

  const handleSubmit = async (data: FoodInfo) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
